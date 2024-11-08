import React from 'react';
import DownloadLink from 'react-download-link';
import resume from '../assets/resume.pdf';

const ResumeDownload = () => {
  return (
    <div className="flex justify-center">
      <DownloadLink
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        filename="your-resume.pdf"
        exportFile={() => resume}
      >
        Download Resume
      </DownloadLink>
    </div>
  );
};

export default ResumeDownload;