import PropTypes from 'prop-types';
import s from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from 'redux/phonebook/phonebook-actions';

const Filter = ({ title }) => {
  const value = useSelector(state => state.phonebook.filter);
  const dispatch = useDispatch();

  return (
    <label className={s.label}>
      {title}
      <input
        className={s.input}
        type="text"
        value={value}
        onChange={e => dispatch(changeFilter(e.target.value))}
        name="filter"
      />
    </label>
  );
};

export default Filter;

Filter.propTypes = {
  title: PropTypes.string.isRequired,
};
