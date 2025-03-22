import { FaInstagram, FaTwitter, FaFacebook, FaYoutube, FaTiktok } from "react-icons/fa";

const SableFooter = () => {
  return (
    <footer className="bg-black text-white p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold">Sable Credit</h3>
          <ul className="mt-4 space-y-2">
            <li>Sable ONE Credit</li>
            <li className="text-teal-400">Credit Score Coming Soon</li>
          </ul>
          <h3 className="text-xl font-bold mt-6">Sable Debit</h3>
          <h3 className="text-xl font-bold mt-6">App</h3>
          <h3 className="text-xl font-bold mt-6">Learn</h3>
          <ul className="mt-4 space-y-2">
            <li>FAQs</li>
            <li>About Sable</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold">Contact</h3>
          <p className="mt-4">Email: help@sablecard.com</p>
          <p>Location: New York, NY</p>

          <div className="flex space-x-4 mt-6">
            <FaInstagram size={24} />
            <FaTwitter size={24} />
            <FaFacebook size={24} />
            <FaYoutube size={24} />
            <FaTiktok size={24} />
          </div>
        </div>

        <div className="text-sm">
          <p>© Sable Money Inc, all rights reserved.</p>
          <p className="mt-4">Privacy policy | Terms and conditions</p>
          <p className="mt-4">
            *Banking services provided by Coastal Community Bank, Member FDIC,
            pursuant to license by Mastercard International Inc.
          </p>
          <p>
            Sable account is FDIC-Insured up to $250,000 per depositor through
            Coastal Community Bank, Member FDIC.
          </p>
          <p>
            **If you are not a U.S. citizen, you can apply with your passport and
            U.S. Visa. SSN is required for U.S. citizens to open a bank account.
          </p>
          <p>*** Double cashback bonus (through 12/2022)</p>
        </div>
      </div>
    </footer>
  );
};

export default SableFooter;