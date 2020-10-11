import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import ItemComponent from './sidebar__parts/item';
import Comment from '@/components/icons/comment';
import LogOff from '@/components/icons/logoff';
import Coffee from '@/components/icons/coffee';
import PlusIcon from '@/components/icons/plus';
import { Modal, useModal } from '@/hooks/useModal';
import Conference from '@/types/conference';
import { requestAPI } from '@/utils/APIUtil';
import { useAuth } from '@/context/AuthContext';

import dayjs from 'dayjs';
import 'dayjs/locale/ko';

dayjs.locale('ko');

const SidebarComponent: React.FC = React.memo(() => {
  const { openModal } = useModal();
  const { user } = useAuth();
  const [data, setData] = useState([]);

  useEffect(() => {
    requestAPI<Conference>('/conference/my', { userId: user?.id }).then(res => {
      setData(res);
    });
  }, [user?.id]);

  return (
    <SidebarWrapper>
      {/* <ItemComponent icon={<Comment />} now={true} /> */}
      {data &&
        data.map((item, i) => {
          return (
            <ItemComponent
              icon={<Comment />}
              time={dayjs(item.releasedAt).format('HH:mm')}
              href={'/meet/' + item.id}
              key={i}
            />
          );
        })}
      <ItemComponent href="/lounge" icon={<Coffee />} />
      <ItemComponent icon={<PlusIcon />} onClick={() => openModal(Modal.AddConference)} />
      <SidebarBottom>
        <ItemComponent icon={<LogOff />} href="/logout" />
      </SidebarBottom>
    </SidebarWrapper>
  );
});

// export const getServerSideProps: GetServerSideProps = async ({ query }) => {
//   const meetData = await requestAPI<Conference>('/conference/my', { userId });
//   console.log(meetData);
//   return { props: { meetData } };
// };

const SidebarWrapper = styled.div`
  width: 82px;
  height: calc(100vh - 38px);
  background: var(--secondary);
  padding: 24px 0;
  position: relative;
`;

const SidebarBottom = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
`;

export default SidebarComponent;
