import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import Profile from '@assets/svg/Profile.svg?react';
import Plus from '@assets/icons/Plus';

interface ProfileImageProps {
  imageUrl?: string;
  isEdit?: boolean;
  // eslint-disable-next-line no-unused-vars
  onImageUpload: (imageUrl: string) => void;
}

const ProfileImage = ({
  imageUrl,
  isEdit = true,
  onImageUpload,
}: ProfileImageProps) => {
  const [selectedImage, setSelectedImage] = useState<string | undefined>(
    imageUrl,
  );
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handlePlusClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files) return;

    const imageUrl = URL.createObjectURL(files[0]);
    setSelectedImage(imageUrl);
    onImageUpload(imageUrl);
  };

  return (
    <ProfileWrapper>
      {selectedImage ? (
        <ProfileImg src={selectedImage} alt="Profile" />
      ) : (
        <Profile />
      )}
      {isEdit && (
        <PlusWrapper>
          <Plus size={32} onClick={handlePlusClick} />
        </PlusWrapper>
      )}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        style={{ display: 'none' }}
      />
    </ProfileWrapper>
  );
};

export default ProfileImage;

const ProfileWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProfileImg = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
`;

const PlusWrapper = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translate(10%, 0%);
`;
