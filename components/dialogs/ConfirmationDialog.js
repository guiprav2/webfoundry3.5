import d from '../../other/dominant.js';
import styles from '../../other/styles.js';

class ConfirmationDialog {
  constructor(props) { this.props = props }

  render = () => this.root = d.html`
    <dialog class="outline-none rounded-lg shadow-xl text-neutral-100 bg-[#091017] w-64 p-3 pt-2 min-w-64">
      <form method="dialog">
        <div>${d.text(() => this.props.title)}</div>
        <div class="flex gap-1.5 mt-3">
          <button value="no" ${{ class: styles.fullSecondaryBtn }}>No</button>
          <button value="yes" ${{ class: styles.fullPrimaryBtn }}>Yes</button>
        </div>
      </form>
    </dialog>
  `;
}

export default ConfirmationDialog;
