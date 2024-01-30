import { useTranslation } from "react-i18next";


function TerminosYCondiciones() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-8">
      <p>
        {t("TERMINOS1TITULO")}
        <br />
        {t("TERMINOS1DESC")}
      </p>

      <p>
        {t("TERMINOS2TITULO")}
        <br />
        {t("TERMINOS2DESC")}
      </p>

      <p>
        {t("TERMINOS3TITULO")}
        <br />
        {t("TERMINOS3DESC")}
      </p>

      <p>
        {t("TERMINOS4TITULO")}
        <br />
        {t("TERMINOS4DESC")}
      </p>

      <p>
        {t("TERMINOS5TITULO")}
        <br />
        {t("TERMINOS5DESC")}
      </p>

      <p>
        {t("TERMINOS6TITULO")}
        <br />
        {t("TERMINOS6DESC")}
      </p>

      <p>
        {t("TERMINOS7TITULO")}
        <br />
        {t("TERMINOS7DESC")}
      </p>

      <p>
        {t("TERMINOS8TITULO")}
        <br />
        {t("TERMINOS8DESC")}
      </p>

      <p>
        {t("TERMINOS9TITULO")}
        <br />
        {t("TERMINOS9DESC")}
      </p>

      <p>
        {t("TERMINOS10TITULO")}
        <br />
        {t("TERMINOS10DESC")}
      </p>

      <p>
        {t("TERMINOS11TITULO")}
        <br />
        {t("TERMINOS11DESC")}
      </p>

      <p>
        {t("TERMINOS12TITULO")}
        <br />
        {t("TERMINOS12DESC")}
      </p>

      <p>
        {t("TERMINOS13TITULO")}
        <br />
        {t("TERMINOS13DESC")}
      </p>

      <p>
        {t("TERMINOS14TITULO")}
        <br />
        {t("TERMINOS14DESC")}
      </p>

      <p>
        {t("TERMINOS15TITULO")}
        <br />
        {t("TERMINOS15DESC")}
      </p>

      <p>
        {t("TERMINOS16TITULO")}
      </p>
    </div>
  );
}

function PoliticaYPrivacidad() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-8">
      <p>{t("POLITICA1TITULOO")}</p>

      <p>
        {t("POLITICA1TITULO")}
        <br />
        {t("POLITICA1DESC")}
      </p>

      <p>
        {t("POLITICA2TITULO")}
        <br />
        {t("POLITICA2DESC")}
      </p>

      <p>
        {t("POLITICA3TITULO")}
        <br />
        {t("POLITICA3DESC")}
      </p>

      <p>
        {t("POLITICA4TITULO")}
        <br />
        {t("POLITICA4DESC")}
      </p>

      <p>
        {t("POLITICA5TITULO")}
        <br />
        {t("POLITICA5DESC")}
      </p>

      <p>
        {t("POLITICA6TITULO")}
        <br />
        {t("POLITICA6DESC")}
      </p>

      <p>
        {t("POLITICA7TITULO")}
        <br />
        {t("POLITICA7DESC")}
      </p>
    </div>
  );
}

export { PoliticaYPrivacidad, TerminosYCondiciones };