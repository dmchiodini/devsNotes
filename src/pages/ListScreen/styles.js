import styled from 'styled-components';

export const Container = styled.View`
    flex: 1;
    background-color: #333;
    justify-content: center;
    align-items: center;
`;

export const AddButton = styled.TouchableHighlight`
    margin-right: 15px;
`;

export const AddButtonImg = styled.Image`
   width: 24px;
   height: 24px; 
`;

export const NotesList = styled.FlatList`
    flex: 1;
    width: 100%;
`;

export const NoNotes = styled.View`
    justify-content: center;
    align-items: center;
`;

export const NoNotesImg = styled.Image`
    width: 60px;
    height: 60px;
    margin-bottom: 10px;
`; 

export const NoNotesText = styled.Text`
    font-size: 17px;
    color: #FFF
`;