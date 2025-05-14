import styles from "./Checkboxes.module.css";
type CheckboxesProps = {
  enabled: boolean;
  refresh: boolean;
  onEnabledChange: (checked: boolean) => void;
  onRefreshChange: (checked: boolean) => void;
};
export function Checkboxes({
  enabled,
  refresh,
  onEnabledChange,
  onRefreshChange,
}: CheckboxesProps) {
  return (
    <div className={styles.checkboxes}>
      <div className={styles.checkbox}>
        <input
          type="checkbox"
          name="enabled"
          checked={enabled}
          onChange={(e) => onEnabledChange(e.target.checked)}
        />
        <label htmlFor="enabled">Enabled</label>
      </div>
      <div className={styles.checkbox}>
        <input
          type="checkbox"
          name="refresh"
          checked={refresh}
          onChange={(e) => onRefreshChange(e.target.checked)}
        />
        <label htmlFor="refresh">Auto-refresh every 5 seconds</label>
      </div>
    </div>
  );
}
