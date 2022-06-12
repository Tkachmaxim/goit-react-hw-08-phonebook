import PropTypes from 'prop-types';
import s from './Filter.module.css';

const Filter = ({ title, value, onChange }) => {
  return (
    <label className={s.label}>
      {title}
      <input
        className={s.input}
        type="text"
        value={value}
        onChange={onChange}
        name="filter"
      />
    </label>
  );
};

export default Filter;

Filter.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
