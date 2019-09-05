import { connect } from 'react-redux';
import Cats from '../components/Cats';
import { getCats } from '../selectors/catSelectors';

const mapStateToProps = state => ({
  cats: getCats(state)
});

export default connect(
  mapStateToProps
)(Cats);
