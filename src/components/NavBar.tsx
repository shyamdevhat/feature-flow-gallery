
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <nav className="flex items-center justify-between px-6 py-4 w-full bg-transparent">
      <div className="font-semibold text-2xl text-white select-none tracking-wide">GenAI Solutions</div>
      <div className="flex gap-4 items-center">
        {/* ...any other links here... */}
        <Button
          variant="secondary"
          className="ml-4 bg-accent text-white hover:bg-accent/80"
          onClick={() => navigate('/admin')}
        >
          Admin
        </Button>
      </div>
    </nav>
  );
};

export default NavBar;
