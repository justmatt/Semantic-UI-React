import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import {
  childrenUtils,
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
} from '../../lib'

/**
 * A step can contain a title.
 */
function StepTitle(props) {
  const { children, className, title } = props
  const classes = cx('title', className)
  const rest = getUnhandledProps(StepTitle, props)
  const ElementType = getElementType(StepTitle, props)

  return (
    <ElementType {...rest} className={classes}>
      {childrenUtils.isNil(children) ? title : children}
    </ElementType>
  )
}

StepTitle._meta = {
  name: 'StepTitle',
  parent: 'Step',
  type: META.TYPES.ELEMENT,
}

StepTitle.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Shorthand for primary content. */
  title: customPropTypes.contentShorthand,
}

export default StepTitle
