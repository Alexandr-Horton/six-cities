import OptionItem from '../option-item/option-item';

type OptionListProps = {
  options: string[];
}

function OptionList({options}: OptionListProps): JSX.Element {
  return (
    <div className="property__inside">
      <h2 className="property__inside-title">What&apos;s inside</h2>
      <ul className="property__inside-list">
        {options.map((option) => <OptionItem option={option} key={option}/>)}
      </ul>
    </div>
  );
}

export default OptionList;
