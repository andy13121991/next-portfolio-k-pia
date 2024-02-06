// Import the mysql2/promise library
import mysql from 'mysql2/promise';

// Create a connection pool for MySQL database
const pool = mysql.createPool({
    host: '127.0.0.1',       // Database host
    user: 'root',            // Database user
    password: '',            // Database password
    database: 'testimonials', // Database name
    waitForConnections: true, // Whether the pool should wait for available connections or return an error
    connectionLimit: 10,      // Maximum number of connections in the pool
    queueLimit: 0,            // Maximum number of connection requests the pool will queue before returning an error
});

// Function to execute SQL queries
export const query = async (sql, values) => {
    // Get a connection from the pool
    const connection = await pool.getConnection();
    
    try {
        // Execute the SQL query with provided values
        const [rows, fields] = await connection.execute(sql, values);
        return rows; // Return the result rows
    } catch (error) {
        console.error('Database Error:', error);
        throw error; // Re-throw the error to propagate it
    } finally {
        // Release the connection back to the pool
        connection.release();
    }
};

// Export the connection pool as the default export
export default pool;
