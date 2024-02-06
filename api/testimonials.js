// Import the query function from the database connection file
import { query } from '../lib/db';

// Define an asynchronous function to handle API requests
export default async function handler(req, res) {
  
  // Log the request body for debugging purposes
  console.log('Request Body:', req.body);
  
  // Check the HTTP method of the request
  if (req.method === 'GET') {
    try {
      // Fetch all testimonials from the database
      const testimonials = await query('SELECT * FROM testimonials');
      // Respond with the fetched testimonials
      res.status(200).json(testimonials);
    } catch (error) {
      // Handle errors during fetching testimonials
      console.error('Error fetching testimonials from the database:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else if (req.method === 'POST') {
    // Extract data from the request body
    const { name, image, message, position } = req.body;

    // Validate required data fields
    if (!name || !message || !position) {
      res.status(400).json({ error: 'Incomplete data provided' });
      return;
    }

    try {
      // Insert a new testimonial into the database
      const result = await query(
        'INSERT INTO testimonials (name, image, message, position) VALUES (?, ?, ?, ?)',
        [name, image, message, position]
      );

      // Retrieve the ID of the newly created testimonial
      const newTestimonialId = result.insertId;

      // Respond with the ID and success status
      res.status(201).json({ id: newTestimonialId, success: true });
    } catch (error) {
      // Handle errors during testimonial creation
      console.error('Error creating testimonial:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    // Respond with an error for unsupported HTTP methods
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
