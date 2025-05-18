using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace WindowsFormsApplication3
{
    public partial class splash : Form
    {
        public splash()
        {
            InitializeComponent();
        }

        private void timer1_Tick(object sender, EventArgs e)
        {
            progressBar2.Increment(5);
            if (progressBar2.Value == 100)
            {
                timer1.Stop();
                //Abrir formulário
                login l = new login();
                l.Show();
                this.Hide();
            }
        }

        private void progressBar2_Click(object sender, EventArgs e)
        {

        }
    }
}
