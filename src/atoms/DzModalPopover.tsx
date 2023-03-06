import React, { FC, MouseEventHandler } from 'react';
import { cn } from '../utils/classnames';
import { DzTitle, TITLE_SIZES, TITLE_TYPES } from '../atoms/DzTitle';
import { DzButton, DzButtonProps, BUTTON_VARIANTS } from '../atoms/DzButton';
import { DzText, TEXT_TYPES as TEXT_TYPES_SUB } from '../atoms/DzText';
import CloseIcon from '../svgIcons/close';

export interface DzModalPopoverProps {
  title?: string;
  description?: string;
  hideButtons?: boolean;
  hideClose?: boolean;
  primaryBtnText?: string;
  secondaryBtnText?: string;
  primaryBtnProps?: DzButtonProps;
  secondaryBtnProps?: DzButtonProps;
  className?: string;
  onClickPrimary?: MouseEventHandler<HTMLButtonElement>;
  onClickSecondary?: MouseEventHandler<HTMLButtonElement>;
  onClickClose?: MouseEventHandler<any>;
}

const styles = {
  tooltipParent: `
    p-5
    flex
    flex-col
    gap-[5px]
    shadow-lg
    bg-white-100
  `,
  headerContainer: `
    flex
    justify-between
  `,
  buttonGroup: `
    flex
    gap-5
    justify-end
  `,
  closeIcon: `
    my-auto
    cursor-pointer
  `,
};
export const DzModalPopover: FC<DzModalPopoverProps> = ({
  title,
  description,
  hideButtons = false,
  hideClose = false,
  primaryBtnText,
  secondaryBtnText,
  primaryBtnProps = {},
  secondaryBtnProps = {},
  className = '',
  onClickPrimary = () => null,
  onClickSecondary = () => null,
  onClickClose = () => null,
}) => {
  const renderTitle = title ? (
    <DzTitle
      titleType={TITLE_TYPES.H3}
      title={title}
      titleSize={TITLE_SIZES.LG}
    />
  ) : null;
  const closeRender = !hideClose ? (
    <CloseIcon onClick={onClickClose} className={cn(styles.closeIcon)} />
  ) : null;
  const renderSubTitle = description ? (
    <DzText textType={TEXT_TYPES_SUB.P} text={description} />
  ) : null;
  const primaryBtn =
    !hideButtons && primaryBtnText ? (
      <DzButton
        onClick={onClickPrimary}
        variant={BUTTON_VARIANTS.TERTIARY}
        className="text-sm"
        {...primaryBtnProps}
      >
        {primaryBtnText}
      </DzButton>
    ) : null;
  const secondaryBtn =
    !hideButtons && secondaryBtnText ? (
      <DzButton
        onClick={onClickSecondary}
        variant={BUTTON_VARIANTS.SECONDARY}
        className="text-sm"
        {...secondaryBtnProps}
      >
        {secondaryBtnText}
      </DzButton>
    ) : null;

  return (
    <div className={cn(styles.tooltipParent, className)}>
      <div className={cn(styles.headerContainer)}>
        {renderTitle}
        {closeRender}
      </div>
      {renderSubTitle}
      <div className={cn(styles.buttonGroup)}>
        {primaryBtn}
        {secondaryBtn}
      </div>
    </div>
  );
};

export default DzModalPopover;
