import React from 'react';
import streamThumbnail from '../../images/stream_thumbnail.jpg'
import {
  List,
  StreamContainer,
  StreamRow,
  StreamThumbnail,
  StreamColumn,
  StreamHeader,
  StreamAvatar,
  StreamUserName,
  StreamDescription,
  StreamCategory,
  TagRow,
  TagView,
  TagText
} from './styles';

const StreamList: React.FC = () => {
  const StreamItem = () => (
    <StreamContainer>
      <StreamThumbnail source={streamThumbnail} />

      <StreamColumn>
        <StreamRow>
          <StreamHeader>
            <StreamAvatar />
            <StreamUserName numberOfLines={1}>deyverson_abreu</StreamUserName>
          </StreamHeader>

          <StreamDescription numberOfLines={1}>
            Front-end com React e React Native, Back-end com Nodes
          </StreamDescription>

          <StreamCategory numberOfLines={1}>Science & Technology</StreamCategory>
        </StreamRow>

        <TagRow>
          <TagView>
            <TagText>Portuguese</TagText>
          </TagView>
          <TagView>
            <TagText>Web Development</TagText>
          </TagView>
        </TagRow>
      </StreamColumn>
    </StreamContainer>
  )

  return (
    <List>
      <StreamItem />
      <StreamItem />
      <StreamItem />
      <StreamItem />
    </List>
  );
};

export default StreamList;
