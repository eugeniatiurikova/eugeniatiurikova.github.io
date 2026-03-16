// Automatic glyph alignment using Canvas API
// This script measures actual glyph boundaries and applies precise margins

(function() {
    'use strict';

    // Store maximum ascent for consistent alignment
    let maxAscent = 0;
    
    // Reusable canvas for measurements (performance optimization)
    const measureCanvas = document.createElement('canvas');
    const measureCtx = measureCanvas.getContext('2d');

    /**
     * Measures actual glyph boundaries using Canvas API
     * @param {string} text - The character to measure
     * @param {string} font - CSS font string (e.g., "250px FontName")
     * @returns {Object} Metrics object with left, right, top, bottom offsets
     */
    function measureGlyphBounds(text, font) {
        measureCtx.font = font;
        const metrics = measureCtx.measureText(text);
        
        return {
            left: metrics.actualBoundingBoxLeft || 0,
            right: metrics.actualBoundingBoxRight || 0,
            ascent: metrics.actualBoundingBoxAscent || 0,
            descent: metrics.actualBoundingBoxDescent || 0,
            width: metrics.width || 0
        };
    }

    /**
     * Gets computed font string for an element
     * @param {HTMLElement} element
     * @returns {string} Font string for Canvas API
     */
    function getComputedFont(element) {
        const style = window.getComputedStyle(element);
        const fontSize = style.fontSize;
        const fontFamily = style.fontFamily;
        const fontWeight = style.fontWeight;
        const fontStyle = style.fontStyle;
        const fontVariant = style.fontVariant;
        
        return `${fontStyle} ${fontVariant} ${fontWeight} ${fontSize} ${fontFamily}`;
    }

    /**
     * Aligns a single letter element to its glyph boundaries
     * @param {HTMLElement} element
     * @param {boolean} calculateOnly - If true, only calculate bounds without applying styles
     * @returns {Object} Measured bounds
     */
    function alignGlyphToBox(element, calculateOnly = false) {
        const text = element.textContent.trim();
        if (!text || text.length === 0) return null;
        
        // Get the first character (in case there are multiple)
        const char = text[0];
        
        // Get computed font
        const font = getComputedFont(element);
        
        // Measure glyph bounds
        const bounds = measureGlyphBounds(char, font);
        
        // Update maxAscent if this is calculation phase
        if (calculateOnly) {
            if (bounds.ascent > maxAscent) {
                maxAscent = bounds.ascent;
            }
            return bounds;
        }
        
        // Get current computed styles
        const style = window.getComputedStyle(element);
        const fontSize = parseFloat(style.fontSize);
        
        // HORIZONTAL ALIGNMENT:
        // Compensate for left side bearing in the font
        let leftOffset = bounds.left;
        
        // If leftOffset is 0 (font might not be fully loaded), use width as fallback
        if (leftOffset === 0 && bounds.width > 0) {
            // Estimate left bearing as percentage of width
            leftOffset = bounds.width * 0.05; // Typical side bearing is ~5% of character width
        }
        
        // VERTICAL ALIGNMENT:
        // All letters should have their tops aligned at the same visual level
        // Calculate the difference: if this glyph is shorter, we need to move it UP (negative margin)
        // to align its top with the tallest glyph's top
        const topOffset = bounds.ascent - maxAscent;
        
        // Apply horizontal adjustment (negative margin to compensate for left side bearing)
        if (leftOffset > 0.5) {
            element.style.marginLeft = `-${leftOffset}px`;
        }
        
        // Apply vertical adjustment
        // Negative topOffset means this letter is shorter, move it up to align tops
        if (Math.abs(topOffset) > 0.5) {
            element.style.marginTop = `${topOffset}px`;
        } else {
            element.style.marginTop = '0px';
        }
        
        // Debug logging
        console.log(`Aligned "${char}":`, {
            char: char,
            leftOffset: `${leftOffset.toFixed(2)}px`,
            topOffset: `${topOffset.toFixed(2)}px`,
            glyphAscent: `${bounds.ascent.toFixed(2)}px`,
            maxAscent: `${maxAscent.toFixed(2)}px`,
            glyphDescent: `${bounds.descent.toFixed(2)}px`
        });
        
        return bounds;
    }

    /**
     * Aligns all letter elements on the page
     */
    function alignAllLetters() {
        const letterElements = document.querySelectorAll('.glossary-letter-title');
        
        if (letterElements.length === 0) {
            console.log('No letter elements found');
            return;
        }
        
        const startTime = performance.now();
        
        // First pass: find the maximum ascent
        maxAscent = 0;
        letterElements.forEach(element => {
            alignGlyphToBox(element, true);
        });
        
        console.log(`Maximum ascent found: ${maxAscent.toFixed(2)}px`);
        
        // Second pass: calculate all styles but don't apply yet (batching)
        const stylesToApply = [];
        letterElements.forEach(element => {
            const bounds = alignGlyphToBox(element, false);
            if (bounds) {
                stylesToApply.push({
                    element: element,
                    marginLeft: element.style.marginLeft,
                    marginTop: element.style.marginTop
                });
            }
        });
        
        // Apply all styles in one batch to minimize reflows
        // (Actually styles are already applied in alignGlyphToBox, 
        // but keeping this structure for future optimization if needed)
        
        const endTime = performance.now();
        const duration = (endTime - startTime).toFixed(2);
        
        console.log(`Aligned ${letterElements.length} letter element(s) in ${duration}ms`);
    }

    // Run after fonts are loaded
    if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(() => {
            // Add extra delay to ensure fonts are fully rendered
            setTimeout(() => {
                console.log('Fonts loaded, aligning letters...');
                alignAllLetters();
            }, 300);
        });
    } else {
        // Fallback for older browsers
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                setTimeout(alignAllLetters, 500);
            });
        } else {
            setTimeout(alignAllLetters, 500);
        }
    }

    // Re-align on window resize (in case font size changes)
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            // Reset margins first
            const letterElements = document.querySelectorAll('.glossary-letter-title');
            letterElements.forEach(el => {
                el.style.marginLeft = '';
                el.style.marginTop = '';
            });
            // Then re-align
            alignAllLetters();
        }, 250);
    });

})();
