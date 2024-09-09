export interface ThemeType {
  background: string;
  color: string;
  borderColor: string;   
  hoverBorderColor: string;
  hoverColor: string;
  focusBackground: string; 
  focusColor: string; 
  iconColor: string
}

export const darkTheme: ThemeType = {
  background: '#000000',
  color: '#e53939',
  borderColor: '#e53939',
  hoverBorderColor: '#888888',
  hoverColor: '#ffffff',
  focusBackground: '#333333',
  focusColor: '#ffffff',
  iconColor: '#e53939',
};

export const lightTheme: ThemeType = {
  background: '#F2F0EF',
  color: '#e53939',
  borderColor: '#e53939',
  hoverBorderColor: '#888888',
  hoverColor: '#000000',
  focusBackground: '#f0f0f0',
  focusColor: '#000000',
  iconColor: '#e53939',
};
