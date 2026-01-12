// Glossary expandable sections script
// Each letter section has its own "Show all" button

document.addEventListener('DOMContentLoaded', function() {
    // Find all letter sections (only those with glossary-letter-title)
    const letterSections = document.querySelectorAll('.wrapper');
    
    letterSections.forEach(function(section) {
        // Check if this section contains glossary elements
        const letterTitle = section.querySelector('.glossary-letter-title');
        if (!letterTitle) {
            return; // Skip this section, it's not a glossary section
        }
        
        const toggleBtn = section.querySelector('.glossary-toggle-all-btn');
        const detailsElements = section.querySelectorAll('.glossary-section_open');
        
        // Skip if no button or details in this section
        if (!toggleBtn || detailsElements.length === 0) {
            return;
        }
        
        // Toggle all details within this section
        function toggleAllInSection() {
            const allExpanded = Array.from(detailsElements).every(function(detail) {
                return detail.open;
            });
            
            detailsElements.forEach(function(detail) {
                if (allExpanded) {
                    // Close all
                    detail.open = false;
                } else {
                    // Open all
                    detail.open = true;
                }
            });
            
            // Update button text
            toggleBtn.textContent = allExpanded ? 'Показать все' : 'Скрыть все';
        }
        
        // Add click handler for this section's button
        toggleBtn.addEventListener('click', toggleAllInSection);
    });
});
