export function getContrastColorOKLCH(L: number, C: number, H: number) {
  if (!L || !C || !H) return '';
  const hRad = (H * Math.PI) / 180;
  const a = C * Math.cos(hRad);
  const b = C * Math.sin(hRad);

  // 计算LMS线性分量
  const l = L + 0.3963377774 * a + 0.2158037573 * b;
  const m = L - 0.1055613458 * a - 0.0638541728 * b;
  const s = L - 0.0894841775 * a - 1.291485548 * b;

  // 立方转换得到非线性LMS
  const lmsL = l ** 3;
  const lmsM = m ** 3;
  const lmsS = s ** 3;

  // 转换为XYZ颜色空间
  const Y = -0.0405801784 * lmsL + 1.1122568696 * lmsM - 0.0716766787 * lmsS;

  // 计算黑白对比度
  const contrastBlack = (Y + 0.05) / 0.05;
  const contrastWhite = 1.05 / (Y + 0.05);
  // 返回对比度更高的颜色
  return contrastBlack >= contrastWhite ? 'black' : 'white';
}
