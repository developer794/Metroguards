export async function generateMetadata({ params }) {
  const { slug } = await params;
  
  // Prevent undefined canonical URLs
  if (!slug || slug === 'undefined') {
    return {
      alternates: {
        canonical: 'https://metroguards.com.au',
      },
    };
  }
  
  return {
    alternates: {
      canonical: `https://metroguards.com.au/${slug}`,
    },
  };
}

export default function Layout({ children }) {
  return children;
}

