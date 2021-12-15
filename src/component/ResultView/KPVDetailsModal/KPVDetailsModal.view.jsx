/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CancelWhite } from '../../../assets/icons';
// import { kpvDetails } from '../../../constants/sampleData';
import useClickOutside from '../../../shared/hooks/useClickOutside';
import { DAQSettings, KPVConfig, PlotChart, ProcessSettings } from './DetailComponent/DetailComponent.view';
import { Creators as ResultViewCreators } from '../Store/action';
import {
  ModalOverlay,
  ModalContent,
  CancelButton,
  DetailContainer,
  HeadingText,
  ContainerHeading
} from './KPVDetailsModal.style';
import Loader from '../../Loader/Loader';

const KPVDetailsModal = (props) => {
  const { setKpvDetailsModal, selectedKPV, machineId } = props;
  const { localeStrings } = useSelector((state) => state.localeStrings);
  const { kpvDetails, detailsLoading } = useSelector((state) => state.filterResultData);
  const kpvDeatilsModalRef = useRef();

  const dispatch = useDispatch();

  useClickOutside(kpvDeatilsModalRef, () => setKpvDetailsModal(false));

  const getComponentMapping = (detail, data) => {
    const mappings = {
      'KPV Configuration': <KPVConfig data={data} />,
      'Plot Chart': <PlotChart data={data} />,
      'DAQ Settings': <DAQSettings data={data} />,
      'Process Settings': <ProcessSettings data={data} />,
      'SPC Settings': '<SPCSettings data={data} />',
      'Display Settings': '<DispalySettings data={data} />'
    };
    return mappings[detail];
  };

  useEffect(() => {
    dispatch(
      ResultViewCreators.getKpvDetails({
        data: selectedKPV,
        machineId
      })
    );
  }, []);

  return (
    <ModalOverlay>
      <CancelButton src={CancelWhite} onClick={() => setKpvDetailsModal(false)} />
      <ModalContent ref={kpvDeatilsModalRef}>
        <ContainerHeading>{localeStrings.kpvDetails || 'KPV details'}</ContainerHeading>
        {detailsLoading ? (
          <Loader />
        ) : (
          kpvDetails &&
          Object.keys(kpvDetails).map((detail, index) => (
            <DetailContainer key={index}>
              <HeadingText>{detail}</HeadingText>
              {(kpvDetails[detail].length > 0 || Object.keys(kpvDetails[detail]).length > 0) &&
                getComponentMapping(detail, kpvDetails[detail])}
            </DetailContainer>
          ))
        )}
      </ModalContent>
    </ModalOverlay>
  );
};

export default KPVDetailsModal;
