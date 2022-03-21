type OptionItemProps = {
  option: string;
}

function OptionItem({option}: OptionItemProps): JSX.Element {
  return (
    <li className="property__inside-item">
      {option}
    </li>
  );
}

export default OptionItem;
