// links
import Link from 'next/link';

// icons
import {
  RiLinkedinFill,
  RiTwitterFill,
  RiGithubFill,

} from 'react-icons/ri';

const Socials = () => {
  return (
    <div className='flex items-center gap-x-5 text-lg'>
      <Link href={'https://www.linkedin.com/in/yohanbaechle/'} className='hover:text-accent transition-all duration-300 animate-bounce' target="_blank">
        <RiLinkedinFill />
      </Link>
      <Link href={'https://twitter.com/Yohan_Baechle'}  className='hover:text-accent transition-all duration-300 animate-bounce' target="_blank">
        <RiTwitterFill />
      </Link>
      <Link href={'https://github.com/Yohan-Baechle'} className='hover:text-accent transition-all duration-300 animate-bounce' target="_blank">
        <RiGithubFill />
      </Link>
    </div>
  );
};

export default Socials;