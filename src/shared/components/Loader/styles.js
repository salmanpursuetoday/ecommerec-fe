import { styled } from '@material-ui/core/styles';

export const ProgressBar = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: (props) => (props.loaderpadding ? props.loaderpadding : '15%'),
  alignItems: 'center',
  verticalAlign: 'middle',
});
