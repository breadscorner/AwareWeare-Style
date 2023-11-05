export default function Footer() {
  
  return (
    <footer className="bg-gray-100">
      <div className="container mx-auto py-4">
        <div className="flex justify-center items-center">
          <p className="text-center text-sm text-gray-600">
            © {new Date().getFullYear()} Made by AwareWear. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
