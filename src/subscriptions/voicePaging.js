import * as comicReaderActions from '@/actions/comicReaderActions';
import handler from '@/subscriptions/Handler';
import SpeechRecognition from '@/libs/SpeechRecognition';

const keywords = {
  next: ['つぎ', '次', 'ネクスト', 'はい'],
  pre: ['まえ', '前', 'プレ'],
};

let keeper = false;

export const is = state =>
  state.location?.path === '/viewer' &&
  state.voice.enable &&
  state.voice.active;

const SpeechEffect = dispatch => {
  const startHandle = handler.addListener(SpeechRecognition, 'start', () => {
    console.log('onstart');
    // init flag
    keeper = false;
  });

  const resultHandle = handler.addListener(
    SpeechRecognition,
    'result',
    event => {
      console.log('onresult');
      const { results, resultIndex } = event;

      let voiceText = '';
      for (let index = resultIndex; index < results.length; index++) {
        const result = results[index];
        voiceText += result[0].transcript;
      }

      if (!keeper) {
        if (keywords.next.includes(voiceText)) {
          keeper = true;
          dispatch(comicReaderActions.NextPage);
          SpeechRecognition.stop();
        } else if (keywords.pre.includes(voiceText)) {
          keeper = true;
          dispatch(comicReaderActions.PrePage);
          SpeechRecognition.stop();
        }
      }
    }
  );

  const endHandle = handler.addListener(SpeechRecognition, 'end', () => {
    console.log('onend');
    SpeechRecognition.start();
  });

  const errorHandle = handler.addListener(SpeechRecognition, 'error', error => {
    console.log(error);
  });

  return () => {
    handler.removeListener(startHandle);
    handler.removeListener(resultHandle);
    handler.removeListener(endHandle);
    handler.removeListener(errorHandle);
  };
};

const Speech = (fx => {
  return action => {
    return [fx, { action }];
  };
})(SpeechEffect);

export const factor = () => Speech();
