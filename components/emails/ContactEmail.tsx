export default function ContactEmail({
  firstName,
  lastName,
  email,
  phone,
  service,
  location,
  message,
}: {
  firstName: string; lastName: string; email: string; phone: string;
  service?: string; location?: string; message?: string;
}) {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", lineHeight: 1.5 }}>
      <h2>New Contact Enquiry</h2>
      <p><strong>Name:</strong> {firstName} {lastName}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Phone:</strong> {phone}</p>
      {service && <p><strong>Service:</strong> {service}</p>}
      {location && <p><strong>Location:</strong> {location}</p>}
      {message && (
        <>
          <p><strong>Message:</strong></p>
          <pre style={{ whiteSpace: "pre-wrap" }}>{message}</pre>
        </>
      )}
    </div>
  );
}
