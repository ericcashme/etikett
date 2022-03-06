import React, { memo } from 'react';

import PropTypes from 'prop-types';

import * as S from './Checkbox.styles';

const Checkbox = ({ kind, id, name, value, checked, onChange, label, readOnly, ...rest }) => (
  <S.CheckboxStyle kind={kind} htmlFor={id} {...rest}>
    <S.HiddenInput
      id={id}
      name={name}
      type="checkbox"
      value={value}
      checked={checked}
      onChange={onChange}
      readOnly={readOnly}
    />
    <S.Shape kind={kind} checked={checked}>
      <S.InnerShape kind={kind} checked={checked} />
    </S.Shape>

    {label && <S.Label kind={kind}>{label}</S.Label>}
  </S.CheckboxStyle>
);

Checkbox.propTypes = {
  kind: PropTypes.oneOf(['square', 'circle']),
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func,
  readOnly: PropTypes.bool,
  label: PropTypes.string,
};

Checkbox.defaultProps = {
  kind: 'square',
  onChange: null,
  readOnly: false,
  label: '',
};

export default memo(Checkbox);
