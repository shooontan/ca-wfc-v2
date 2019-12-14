import { h } from 'hyperapp';
import { DarkModeToggle } from '@/components/DarkModeToggle';
import { ToggleDarkMode } from '@/actions/darkModeActions';

export default props => {
  return (
    <div class="pages-setting">
      <p>setting</p>
      <DarkModeToggle darkMode={props.darkMode} toggleAction={ToggleDarkMode} />
    </div>
  );
};
