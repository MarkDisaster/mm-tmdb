import { Dispatch, SetStateAction } from 'react';

export interface LoginModalProps {
   isModalVisible: boolean;
   setIsModalVisible: Dispatch<SetStateAction<boolean>>;
}
