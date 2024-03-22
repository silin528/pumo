
const Footer = () => (
  <footer>
    <div className="custom-screen pt-16">
      <div className="mt-10 py-10 border-t items-center justify-between flex">
        <p className="text-gray-600">
        版权所有：{' '}
          <a
            href="https://twitter.com/nutlope"
            className="hover:underline transition"
          >
            GOPUAMO晖虎 
          </a>{' '}
          All Rights Reserved
          .
        </p>
        <div className="flex items-center gap-x-6 text-gray-400">
            <span className="text-gray-500">地址：广东省广州市</span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
