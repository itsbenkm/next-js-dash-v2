import postgres from 'postgres'; // Import the postgres library to interact with the PostgreSQL database

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' }); // Initialize the database connection using the connection string from environment variables and requiring SSL

async function listInvoices() {
  // Define an asynchronous function to fetch invoice data
  const data = await sql`
  SELECT invoices.amount, customers.name // Select the invoice amount and customer name
  FROM invoices // From the 'invoices' table
  INNER JOIN customers ON invoices.customer_id = customers.id // Inner join with the 'customers' table on matching customer IDs
  WHERE invoices.amount = 666; // Filter to invoices with an amount of exactly 666
`;

  return data; // Return the fetched data
}

export async function GET() {
  // Export an asynchronous GET request handler for this route
  try {
    // Start a try block to handle potential errors
    return Response.json(await listInvoices()); // Call listInvoices, await the result, and return it as a JSON response
  } catch (error) {
    // Catch any errors that occur during execution
    return Response.json({ error }, { status: 500 }); // Return a JSON response with the error object and a 500 Internal Server Error status
  }
}
