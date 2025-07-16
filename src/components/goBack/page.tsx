"use client";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { IconButton } from '@mui/material';

const GoBack = () => {

  return (
    <div className="w-full pt-15 md:pt-25 bg-[#E7E8EC] flex items-center px-5">
      <IconButton onClick={() => window.history.back()} className="flex items-center gap-2">
        <ArrowBackIcon fontSize="medium" />
      </IconButton>
    </div>
  );
};

export default GoBack;