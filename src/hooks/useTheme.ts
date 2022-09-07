import type { Ref } from "vue";
import { THEME, STORAGE_KEY } from "@/assets/js/consts";

const theme = ref(THEME.light);

const toogleTheme = (t?: string): void => {
  theme.value = t ? t : theme.value === THEME.light ? THEME.dark : THEME.light;
  window.localStorage.setItem(STORAGE_KEY.theme, theme.value);
};

const useTheme = (): [Ref<string>, (t?: string) => void] => {
  return [theme, toogleTheme];
};

export default useTheme;
