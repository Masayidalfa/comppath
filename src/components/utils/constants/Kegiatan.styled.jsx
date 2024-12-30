import styled from 'styled-components';

export const Message = styled.div`
  font-size: 1.2rem;
  text-align: center;
  color: #333;
`;

export const Container = styled.div`
  padding: 20px;
  background-color: #f9f9f9;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Title = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 30px;
  color: #002366;
`;

export const ActivitiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
  margin-top: 20px;
`;

export const ActivityCard = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  padding: 15px;
  transition: all 0.3s ease;
  &:hover {
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
  }
`;

export const Thumbnail = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 5px;
`;

export const Details = styled.div`
  margin-top: 15px;
  font-size: 0.9rem;
  color: #333;
`;

export const Actions = styled.div`
  margin-top: 15px;
  text-align: center;
`;

export const ActionLink = styled.a`
  text-decoration: none;
  font-weight: 600;
  color: #002366;
  font-size: 1rem;
  &:hover {
    color: #0044cc;
  }
`;
