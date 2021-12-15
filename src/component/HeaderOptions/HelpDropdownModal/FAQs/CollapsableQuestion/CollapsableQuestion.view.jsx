/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable max-len */
import React, { useState } from 'react';
import DynamicSVGIcon from '../../../../Common/DynamicSVGIcon';
import { CollapsableContainer, ContentText, SubHeading } from '../FAQs.style';
import PlusIcon from '../../../../../assets/icons/Filter/plus.svg';
import MinusIcon from '../../../../../assets/icons/Filter/minus.svg';

const CollapsableQuestion = ({ question }) => {
  const [showAnswer, setShowAnswer] = useState(false);
  return (
    <CollapsableContainer>
      <SubHeading onClick={() => setShowAnswer(!showAnswer)}>
        <div>
          <DynamicSVGIcon iconUrl={showAnswer ? MinusIcon : PlusIcon} width='1.8rem' />
        </div>
        {question.question}
      </SubHeading>
      {showAnswer && <ContentText>{question.answer}</ContentText>}
    </CollapsableContainer>
  );
};

export default CollapsableQuestion;
