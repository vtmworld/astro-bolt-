export function formatJobContent(content: string): string {
  // Split content into paragraphs
  const paragraphs = content.split('\n\n');
  
  // Format each paragraph with proper HTML
  return paragraphs.map(paragraph => {
    // Handle lists
    if (paragraph.includes('\n •') || paragraph.includes('\n -')) {
      const listItems = paragraph
        .split('\n')
        .filter(item => item.trim())
        .map(item => item.replace(/^[•-]\s*/, '').trim());
      
      return `<ul class="job-list">
        ${listItems.map(item => `<li>${item}</li>`).join('\n')}
      </ul>`;
    }
    
    // Handle section headers
    if (paragraph.toUpperCase() === paragraph && paragraph.length > 3) {
      return `<h2 class="job-section-title">${paragraph}</h2>`;
    }
    
    // Handle regular paragraphs
    return `<p>${paragraph}</p>`;
  }).join('\n');
}