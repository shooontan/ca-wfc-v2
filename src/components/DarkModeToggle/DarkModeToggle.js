import { h } from 'hyperapp';

/**
 * @param {Object} props
 * @param {boolean} props.darkMode
 * @param {boolean} props.disabled
 * @param {Function} props.toggleAction
 * @param {JSX.Element} children
 */
const DarkModeToggle = props => {
  const checked = !!props.darkMode;
  return (
    <div class="fetching-mode-toggler">
      <label for="dark-mode-checkbox">
        Dark Mode:
        <input
          type="checkbox"
          id="dark-mode-checkbox"
          checked={checked}
          value={checked}
          oninput={props.toggleAction}
        />
      </label>
    </div>
  );
};

export default DarkModeToggle;
