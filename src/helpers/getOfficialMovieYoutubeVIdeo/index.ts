import { YOUTUBE_EMBED_URI } from '../../services/constants';
import { MovieVideoProps } from './interfaces';

export const getYouTubeOfficialVideoKey = (results: MovieVideoProps[]) => {
   const video = results.find(
      (video) => video.site.toLowerCase() === 'youtube' && video.official,
   );
   return video?.key ? `${YOUTUBE_EMBED_URI}${video.key}` : null;
};
