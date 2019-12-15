import { h } from 'hyperapp';
// import { theme } from '@/styles/color';
import ComicImage from './ComicImage';
import ComicButton from './ComicButton';
import ComicCloseButton from './ComicCloseButton';
import ComicVoiceButton from './ComicVoiceButton';
import { NextPage, PrePage } from '@/actions/comicReaderActions';
import { Start, Stop } from '@/actions/voiceActions';
import SpeechRecognition from '@/libs/SpeechRecognition';

import './ComicReader.css';

/**
 * Comic Viewer.
 *
 * @param {Object} props
 * @param {string} props.title
 * @param {string} props.seriesId
 * @param {number} props.pageNum
 * @param {{imageId: string, imageUrl: string}[]} props.imageData
 */
const ComicReader = props => {
  const { path } = props.location;
  const pageData = props.pageData?.[path];

  const currentPage = pageData?.currentPage || 0;
  const allPage = pageData?.pageNum || 0;
  const comic = pageData?.imageData?.[currentPage];

  const { voice } = props;
  const stop = SpeechRecognition
    ? SpeechRecognition.stop.bind(SpeechRecognition)
    : undefined;
  const start = SpeechRecognition
    ? SpeechRecognition.start.bind(SpeechRecognition)
    : undefined;
  const voiceAction = voice.active ? [Stop, stop] : [Start, start];

  // TODO: skeleton placeholder card

  return (
    <div class="components-comic-reader">
      <ComicCloseButton />
      <ComicVoiceButton active={voice.active} action={voiceAction} />
      <ComicButton
        next
        clickAction={NextPage}
        disabled={currentPage >= allPage}
      >
        {'<'}
      </ComicButton>
      <div class="components-comic-reader-image">
        {comic && (
          <ComicImage
            src={comic.imageUrl}
            width={pageData.width || 0}
            height={pageData.height || 0}
          />
        )}
      </div>
      <ComicButton clickAction={PrePage} disabled={currentPage <= 0}>
        {'>'}
      </ComicButton>
    </div>
  );
};

export default ComicReader;
