import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import {
  BackHeader,
  Button,
  Input,
  ProfileImage,
  ContentContainer,
} from '@components/index';
import {
  validateKoreanName,
  validateEnglishName,
  validateGender,
  validateAge,
  validateJob,
} from '@utils/validation';
import { getErrorMessage } from '@utils/validationMessages';
import { COMMON_COLORS, COLORS } from '@constants/colors';

const ProfileEdit = () => {
  const navigate = useNavigate();

  const initialState = {
    name_k: { value: '', error: '' },
    name_e: { value: '', error: '' },
    gender: { value: '', error: '' },
    age: { value: '', error: '' },
    job: { value: '', error: '' },
    profileImage: { value: '', error: '' },
  };
  const [formData, setFormData] = useState(initialState);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: string,
  ) => {
    setFormData({
      ...formData,
      [field]: { value: e.target.value, error: '' },
    });
  };

  const handleImageUpload = (imageUrl: string) => {
    setFormData({
      ...formData,
      profileImage: { value: imageUrl, error: '' },
    });
  };

  const handleSubmit = () => {
    let isValid = true;
    const validationErrors = { ...formData };

    if (!validateKoreanName(formData.name_k.value)) {
      validationErrors.name_k.error = getErrorMessage(
        'name_k',
        formData.name_k.value,
      );
      isValid = false;
    }
    if (!validateEnglishName(formData.name_e.value)) {
      validationErrors.name_e.error = getErrorMessage(
        'name_e',
        formData.name_e.value,
      );
      isValid = false;
    }
    if (!validateGender(formData.gender.value)) {
      validationErrors.gender.error = getErrorMessage(
        'gender',
        formData.gender.value,
      );
      isValid = false;
    }
    if (!validateAge(formData.age.value)) {
      validationErrors.age.error = getErrorMessage('age', formData.age.value);
      isValid = false;
    }
    if (!validateJob(formData.job.value)) {
      validationErrors.job.error = getErrorMessage('job', formData.job.value);
      isValid = false;
    }

    setFormData(validationErrors);

    if (isValid) {
      const formValues = Object.fromEntries(
        Object.entries(formData).map(([key, { value }]) => [key, value]),
      );
      console.log('Form submitted:', formValues);
      navigate('/mypage', { replace: true, state: { showMessage: true } });
    } else {
      console.log('Validation failed:', validationErrors);
    }
  };

  return (
    <Container>
      <BackHeader title="프로필 수정" showIcon={false} />
      <ContentContainer>
        <ProfileImage
          imageUrl={formData.profileImage.value}
          onImageUpload={handleImageUpload}
        />
        <Input
          placeholder="이름(한글)"
          type="mypage"
          value={formData.name_k.value}
          inputType="text"
          onChange={e => handleInputChange(e, 'name_k')}
          style={{ marginTop: '1rem' }}
        />
        {formData.name_k.error && (
          <ErrorText>{formData.name_k.error}</ErrorText>
        )}
        <Input
          placeholder="이름(영문)"
          type="mypage"
          value={formData.name_e.value}
          inputType="text"
          onChange={e => handleInputChange(e, 'name_e')}
          style={{ marginTop: '1rem' }}
        />
        {formData.name_e.error && (
          <ErrorText>{formData.name_e.error}</ErrorText>
        )}
        <Input
          placeholder="성별 (ex. 남자, 여자)"
          type="mypage"
          value={formData.gender.value}
          inputType="text"
          onChange={e => handleInputChange(e, 'gender')}
          style={{ marginTop: '1rem' }}
        />
        {formData.gender.error && (
          <ErrorText>{formData.gender.error}</ErrorText>
        )}
        <Input
          placeholder="나이"
          type="mypage"
          value={formData.age.value}
          inputType="number"
          onChange={e => handleInputChange(e, 'age')}
          style={{ marginTop: '1rem' }}
        />
        {formData.age.error && <ErrorText>{formData.age.error}</ErrorText>}
        <Input
          placeholder="직업"
          type="mypage"
          value={formData.job.value}
          inputType="text"
          onChange={e => handleInputChange(e, 'job')}
          style={{ marginTop: '1rem' }}
        />
        {formData.job.error && <ErrorText>{formData.job.error}</ErrorText>}
        <Button
          buttonText="저장하기"
          type="saveBtn"
          style={{ marginTop: '5rem' }}
          bgColor={COMMON_COLORS.yellow}
          txtColor={COLORS.black}
          onClick={handleSubmit}
        />
      </ContentContainer>
    </Container>
  );
};

export default ProfileEdit;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
`;

const ErrorText = styled.p`
  color: ${COMMON_COLORS.red};
  font-size: 0.8rem;
  margin: -0.5rem 0;
`;
