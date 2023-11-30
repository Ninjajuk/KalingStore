
import React from 'react';

const Card = ({ title, content,listItems }) => (
  <div className="bg-white p-6 rounded-lg shadow-md mb-6">
    <h2 className="text-2xl font-semibold mb-4 text-blue-600">{title}</h2>
    {listItems ? (
      <ul className="list-disc ml-8 text-gray-700">
        {listItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    ) : (
      <p className="text-gray-700">{content}</p>
    )}
  </div>
);

const AboutUs = () => {
  return (
    <section className='bg-gray-100'>
          <div className="container mx-auto  p-8  rounded-md">
      <h1 className="text-4xl font-bold mb-8 text-center text-blue-800">About Us</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card
          title="Our Story"
          content="Founded in 2024, Yingkiong Store was born out of a love for our product and a commitment to what makes our brand unique. What started as a small idea has now grown into a  thriving community of our customer base who share our passion."
        />

        <Card
          title="Our Mission"
          content="At Yingkiong Store, our mission is to our product better. We believe in  core beliefs, and every product we offer is a reflection of that commitment. We strive to excel in every aspect of our business."
        />

        {/* Add additional cards for other sections as needed */}
      </div>

      {/* <div className=" grid grid-cols-1 md:grid-cols-3 gap-4">
      <Card
          title="Why Choose [Your Brand Name]?"
          listItems={[
            "<strong>Quality Products:</strong> We source only the finest [your product category] to ensure that you receive products that are not only stylish but durable.",
            "<strong>Exceptional Service:</strong> Your satisfaction is our priority. Our dedicated customer support team is here to assist you at every step.",
            "<strong>Community-Focused:</strong> [Your Brand Name] is more than just a brand; it's a community. Join us on [social media platforms] to connect with like-minded individuals.",
          ]}
        />

        <Card
          title="Sustainability"
          content="We are committed to [your sustainability initiatives]. By choosing [Your Brand Name], you're not just buying a product; you're supporting a [adjective, e.g., eco-friendly] movement towards a better, more sustainable future."
        />

        <Card
          title="Join Us on this Journey"
          content="Whether you're a returning customer or just discovering us for the first time, we invite you to join us on this exciting journey. Thank you for being a part of the [Your Brand Name] family."
        />
      </div> */}

      {/* Add Contact Information and Social Media Links as needed */}
    </div>
    </section>

  );
};

export default AboutUs;
