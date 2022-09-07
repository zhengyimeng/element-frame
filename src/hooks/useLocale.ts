import { STORAGE_KEY } from "@/assets/js/consts";
import type { WritableComputedRef } from "vue";
import type { Locale, FallbackLocale } from "vue-i18n";

let setLocale: (l: Locale) => void | undefined;

const generateSetLocale = (
  locale: WritableComputedRef<Locale>,
  fallbackLocale: WritableComputedRef<FallbackLocale>
) => {
  return function (l: Locale) {
    locale.value = l || (fallbackLocale.value as Locale);
    window.localStorage.setItem(STORAGE_KEY.locale, locale.value);
  };
};

const useLocale = (): [WritableComputedRef<string>, (t: Locale) => void] => {
  const { locale, fallbackLocale } = useI18n();

  return [
    locale,
    setLocale || (setLocale = generateSetLocale(locale, fallbackLocale)),
  ];
};

export default useLocale;
