import { YoutubeVideoProps } from './interfaces';

const YoutubeVideo = ({ youtubeUrl }: YoutubeVideoProps) => {
   if (!youtubeUrl) return;

   return (
      <iframe
         width="100%"
         height="250px"
         src={youtubeUrl}
         title="YouTube video player"
         frameBorder="0"
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
         referrerPolicy="strict-origin-when-cross-origin"
         allowFullScreen
      ></iframe>
   );
};

export default YoutubeVideo;
