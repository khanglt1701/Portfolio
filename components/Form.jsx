'use client';

import { ArrowRightIcon, MailIcon, MessageSquare, User } from 'lucide-react';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';

const Form = () => {
  return (
    <form className='flex flex-col gap-y-4'>
      {/* input */}
      <div className='relative'>
        <Input type='name' id='name' placeholder='Name' />
        <User className='absolute right-6 top-4' size={20} />
      </div>
      {/* input */}
      <div className='relative'>
        <Input type='email' id='email' placeholder='Email' />
        <MailIcon className='absolute right-6 top-4' size={20} />
      </div>
      {/* input */}
      <div className='relative'>
        <Textarea
          type='message'
          id='message'
          placeholder='Type your message here...'
        />
        <MessageSquare className='absolute right-6 top-4' size={20} />
      </div>
      <Button className='flex items-center gap-x-1 max-w-[166px]'>
        Let's Talk <ArrowRightIcon size={20} />
      </Button>
    </form>
  );
};

export default Form;
