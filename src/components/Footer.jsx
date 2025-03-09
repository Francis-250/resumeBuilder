const Footer = () => {
  return (
    <div className="border-t border-gray-300 dark:border-gray-400 py-3 flex justify-between items-center mt-4">
      <div className="">&copy; {new Date().getFullYear()}</div>
      <div className="text-lg">Munyankindi Francois</div>
    </div>
  );
};

export default Footer;
