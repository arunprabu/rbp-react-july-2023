import MenuList from '../MenuList/MenuList'

const Footer = () => {
  const copyrightYear = 2023;
  const devName = 'Arun';

  return (
    <footer className="text-center">
      <hr />
      <MenuList />
      <p>
        Copyright {copyrightYear} | {devName}
      </p>
    </footer>
  );
}

export default Footer;
