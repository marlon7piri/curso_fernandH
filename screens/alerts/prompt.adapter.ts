import prompt from 'react-native-prompt-android';

interface Options {
  title?: string;
  subtitle: string;
  buttons: PromptButtomProps[];
  prompType?: 'plain-text' | 'secure-text';

  defaultValue?: string;
  placeholder?: string;
}

interface PromptButtomProps {
  text: string;
  onPress: (value: string) => void;
  style?: 'cancel' | 'default' | 'destructive';
}

export const ShowPrompt = ({
  title,
  subtitle,
  buttons,
  prompType = 'plain-text',

  defaultValue,
  placeholder,
}: Options) => {
  prompt(title, subtitle, buttons, {
    type: prompType,
    cancelable: false,
    defaultValue: defaultValue,
    placeholder: placeholder,
  });
};
