import { NextResponse } from 'next/server';
import Parser from 'rss-parser';

const parser = new Parser();

export async function GET() {
  try {
    const feed = await parser.parseURL('https://medium.com/feed/@vidyasagar.chamle');
    
    const posts = feed.items.map((item) => {
      // Extract read time from content or description if available
      const content = item.contentSnippet || item.content || '';
      const readTimeMatch = content.match(/(\d+)\s*min\s*read/i) || 
                           item.title?.match(/(\d+)\s*min\s*read/i);
      const readTime = readTimeMatch ? `${readTimeMatch[1]} min read` : '5 min read';
      
      // Extract category/tags if available
      const categories = item.categories || [];
      const category = categories[0] || 'Article';
      
      // Clean description (remove HTML tags and limit length)
      let description = item.contentSnippet || item.content || '';
      description = description.replace(/<[^>]*>/g, '').trim();
      if (description.length > 150) {
        description = description.substring(0, 150) + '...';
      }
      
      return {
        title: item.title || 'Untitled',
        description: description || 'No description available',
        date: item.pubDate || new Date().toISOString(),
        readTime,
        category,
        mediumUrl: item.link || item.guid || '',
      };
    });

    return NextResponse.json({ posts });
  } catch (error) {
    console.error('Error fetching Medium articles:', error);
    return NextResponse.json(
      { error: 'Failed to fetch articles', posts: [] },
      { status: 500 }
    );
  }
}

